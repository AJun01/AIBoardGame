package com.example.spring_boot.chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1/chat")
public class ChatController {

    private final WebClient webClient;

    @Autowired
    public ChatController(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("http://ai-service:9001").build();
    }

    @PostMapping
    public ResponseEntity<String> askQuestion(@RequestBody ChatRequest chatRequest) {
        // build the request payload
        String aiServiceUrl = "/game/choices";

        // send the choice to the AI service and get the response
        String response = webClient.post()
                .uri(aiServiceUrl)
                .bodyValue(chatRequest)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        // return the response from the AI service
        return ResponseEntity.ok(response);
    }
}