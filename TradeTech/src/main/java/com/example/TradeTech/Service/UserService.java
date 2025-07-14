package com.example.TradeTech.Service;

import com.example.TradeTech.Exceptions.InvalidCredentialException;
import com.example.TradeTech.Exceptions.ResourceNotFoundException;
import com.example.TradeTech.Model.User;
import com.example.TradeTech.Repository.UserRepository;
import com.example.TradeTech.dto.LoginDTO;
import com.example.TradeTech.dto.RegisterDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User register(RegisterDTO dto) {
        Optional<User> existingUser = userRepository.findByEmail(dto.email);
        if(existingUser.isPresent()) {
            throw new IllegalArgumentException("Email already in use");
        }
        try{
            User user = new User();
            user.setName(dto.name);
            user.setEmail(dto.email);
            user.setPassword(dto.password); // hash later
            return userRepository.save(user);
        } catch(Exception e) {
            throw new RuntimeException("Registration failed",e);
        }

    }

    public User login(LoginDTO dto) {
        try {
            User user = userRepository.findByEmail(dto.email)
                    .orElseThrow(() -> new ResourceNotFoundException("User not found"));

            if (!user.getPassword().equals(dto.password)) {
                throw new InvalidCredentialException("Invalid password");
            }

            return user;
        } catch (Exception e) {
            throw new RuntimeException("Login failed",e);
        }
    }


    public List<User> getAllUsers() {
        try {
            return userRepository.findAll();
        } catch (Exception e) {
            throw new RuntimeException("Failed to fetch users",e);
        }
    }

    public User getUserById(Long id) {
        try {
            return userRepository.findById(id)
                    .orElseThrow(() ->new ResourceNotFoundException("User not found with id: " + id));
        } catch (Exception e) {
            throw new RuntimeException("Failed to fetch user",e);
        }
    }

    public void deleteUser(Long id) {
        try {
            if(!userRepository.existsById(id)) {
                throw new ResourceNotFoundException("User not found with id: " + id);
            }
            userRepository.deleteById(id);
        } catch (RuntimeException e) {
            throw new RuntimeException("Failed to delete user",e);
        }
    }

    public User updateUser(Long id,RegisterDTO dto) {
        try {
            User existing = userRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("user is not found with id: " + id));

            Optional<User> userWithEmail = userRepository.findByEmail(dto.email);
            if(userWithEmail.isPresent() && !userWithEmail.get().getId().equals(id)) {
                throw new IllegalArgumentException("Email already in use by another user");
            }

            existing.setName(dto.name);
            existing.setEmail(dto.email);
            existing.setPassword(dto.password);
            return userRepository.save(existing);
        } catch (Exception e) {
            throw new RuntimeException("Failed to update user",e);
        }
    }
}
