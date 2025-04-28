package com.patrickdumdum.shopping_list.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class HomeController {

    @GetMapping("")
    fun entryPoint(): String{
        return "server is running"
    }
}