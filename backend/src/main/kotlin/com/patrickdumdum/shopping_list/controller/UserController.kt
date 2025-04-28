package com.patrickdumdum.shopping_list.controller

import com.patrickdumdum.shopping_list.entity.User
import com.patrickdumdum.shopping_list.repository.UserRepository
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = ["http://localhost:4200"])
class UserController(private val userRepository: UserRepository) {

    @GetMapping
    fun fetchAllUsers(): List<User> = userRepository.findAll()

    @PostMapping
    fun createUser(@RequestBody user: User): User = userRepository.save(user)


}