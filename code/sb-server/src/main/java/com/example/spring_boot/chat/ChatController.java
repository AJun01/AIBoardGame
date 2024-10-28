package com.example.spring_boot.chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/v1/chat")
public class ChatController {

    private final WebClient webClient;

    @Autowired
    public ChatController(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("http://ai-service:9080").build();
    }

    @PostMapping
    public ResponseEntity<String> askQuestion(@RequestBody String question) {
        // Send the question to the AI service and get the response
        String aiServiceUrl = "/ai-response";  // Adjust path if needed
        String response = webClient.post()
                .uri(aiServiceUrl)
                .bodyValue(question)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        // Return the response back to the client
        return ResponseEntity.ok(response);
    }
}