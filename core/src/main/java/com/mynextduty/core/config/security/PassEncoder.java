package com.mynextduty.core.config.security;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class PassEncoder {
  private PassEncoder() {
    // Private constructor to prevent instantiation
  }

  private static final PasswordEncoder ENCODER = new BCryptPasswordEncoder();

  public static String encode(String rawPassword) {
    return ENCODER.encode(rawPassword);
  }

  public static boolean matches(String rawPassword, String encodedPassword) {
    return ENCODER.matches(rawPassword, encodedPassword);
  }
}
