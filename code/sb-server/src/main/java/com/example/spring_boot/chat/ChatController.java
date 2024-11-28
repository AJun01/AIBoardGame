package com.example.spring_boot.chat;

import com.example.spring_boot.chat.ConvertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import org.apache.commons.text.StringEscapeUtils;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1/chat")
public class ChatController {

    private final WebClient webClient;
    private final ConvertService convertService; // inject the MarkdownService

    @Autowired
    public ChatController(WebClient.Builder webClientBuilder,ConvertService markdownService) {
        this.webClient = webClientBuilder.baseUrl("http://ai-service:9001").build();
        this.convertService = markdownService; // initialize the service
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

        System.out.println("Received AI response!");
        // convert the AI response from markdown to plain text
        String cleanedText = convertService.cleanAndFormat(response);
        // return the plain text response
        return ResponseEntity.ok(cleanedText);
    }
}