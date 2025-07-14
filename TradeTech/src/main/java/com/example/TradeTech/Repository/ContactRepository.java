package com.example.TradeTech.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.TradeTech.Model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long>{
    
    
} 