package com.example.spring_boot.gametype;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1/gametype")
public class GameTypeController {

    private final WebClient webClient;

    public GameTypeController(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("http://ai-service:9001").build();
    }

    @PostMapping
    public ResponseEntity<String> receiveGameType(@RequestBody GameTypeRequest gameTypeRequest) {
        // extract game type from request body
        String gameServiceUrl = "/game/init";

        try {
            // send request with JSON payload and retrieve response as a string
            String response = webClient.post()
                    .uri(gameServiceUrl)
                    .bodyValue(gameTypeRequest)
                    .retrieve()
                    .bodyToMono(String.class) // receive response as a string
                    .block();

            // return the response received from the AI service
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // handle errors and return appropriate response
            return ResponseEntity.status(500).body("Error communicating with AI service: " + e.getMessage());
        }
    }
}
