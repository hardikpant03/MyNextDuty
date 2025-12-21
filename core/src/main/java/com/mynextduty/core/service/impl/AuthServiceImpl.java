package com.mynextduty.core.service.impl;

import com.mynextduty.core.exception.GenericApplicationException;
import com.mynextduty.core.exception.KeyLoadingException;
import com.mynextduty.core.service.AuthService;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import static com.mynextduty.core.utils.Constants.PUBLIC_KEY_PATH;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {
  private String cachedPublicKey;

  @Override
  public String publicKey() {
    if (cachedPublicKey != null) {
      return cachedPublicKey;
    }
    try (InputStream is = getClass().getResourceAsStream(PUBLIC_KEY_PATH)) {
      if (is == null) {
        log.error("Public key file not found at {}", PUBLIC_KEY_PATH);
        throw new KeyLoadingException("Public key file not found in " + PUBLIC_KEY_PATH);
      }
      cachedPublicKey = new String(is.readAllBytes(), StandardCharsets.UTF_8);
      return cachedPublicKey;
    } catch (IOException e) {
      log.error("IO error while reading the public key file", e);
      throw new KeyLoadingException("Failed to read public key", e);
    } catch (Exception e) {
      log.error("Unexpected error while loading public key", e);
      throw new GenericApplicationException("Unexpected error loading public key", e.getCause());
    }
  }
}
