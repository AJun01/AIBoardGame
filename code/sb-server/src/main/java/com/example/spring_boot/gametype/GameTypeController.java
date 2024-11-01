package com.example.spring_boot.gametype;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

@RestController
@RequestMapping("/api/v1/gametype")
public class GameTypeController {

    private final WebClient webClient;

    public GameTypeController(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("http://ai-service:9001").build();
    }

    @PostMapping
    public ResponseEntity<Void> receiveGameType(@RequestBody GameTypeRequest gameTypeRequest) {
        // extract game type from request body
        String gameServiceUrl = "/game/init";
        String gameType = gameTypeRequest.getGame_type();

        // send request with JSON payload
        webClient.post()
                .uri(gameServiceUrl)
                .bodyValue(gameTypeRequest)
                .retrieve()
                .bodyToMono(Void.class)
                .block();

        // return OK status
        return ResponseEntity.ok().build();
    }
}