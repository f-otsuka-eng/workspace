package com.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class HelloController {

    @GetMapping("/")
    public String index() {
        return "Hello from Spring Boot!";
    }

    @GetMapping("/json")
    public Map<String, String> jsonSample() {
        return Map.of("message", "This is JSON response");
    }
}