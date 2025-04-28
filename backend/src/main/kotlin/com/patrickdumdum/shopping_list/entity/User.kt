package com.patrickdumdum.shopping_list.entity

import jakarta.persistence.*

@Entity
@Table(name = "users")
data class User(
    @Id
    val email: String,
    val firstname: String,
    val surname: String,
)