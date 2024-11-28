package com.example.spring_boot.chat;

import org.commonmark.node.Node;
import org.commonmark.parser.Parser;
import org.commonmark.renderer.html.HtmlRenderer;
import org.apache.commons.text.StringEscapeUtils;
import org.springframework.stereotype.Service;

@Service
public class ConvertService {

    public String cleanAndFormat(String rawText) {
        if (rawText == null || rawText.isEmpty()) {
            return "";
        }

        // Step 1: Decode HTML entities
        String decodedText = StringEscapeUtils.unescapeHtml4(rawText);

        // Step 2: Convert Markdown to plain text
        decodedText = convertMarkdownToPlainText(decodedText);

        // Step 3: Replace escaped newline characters with actual newlines
        decodedText = decodedText.replace("\\n", "\n").trim();

        return decodedText;
    }

    // helper method to convert markdown to plain text
    private String convertMarkdownToPlainText(String markdown) {
        if (markdown == null || markdown.isEmpty()) {
            return "";
        }

        // parse markdown to html
        Parser parser = Parser.builder().build();
        Node document = parser.parse(markdown);
        HtmlRenderer renderer = HtmlRenderer.builder().build();
        String html = renderer.render(document);

        // remove html tags to get plain text
        return html.replaceAll("<[^>]+>", "").trim();
    }
}
