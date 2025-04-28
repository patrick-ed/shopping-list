package com.patrickdumdum.shopping_list.repository

import com.patrickdumdum.shopping_list.entity.User
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository : JpaRepository<User, String>