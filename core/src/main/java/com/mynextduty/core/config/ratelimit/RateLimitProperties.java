package com.mynextduty.core.config.ratelimit;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Data
@Component
@ConfigurationProperties(prefix = "core.rate-limit")
public class RateLimitProperties {
  private int refillTokens;
  private int refillDuration;
  private int defaultLimit;
  private int adminLimit;
  private int customerLimit;

  /**
   * Returns the rate limit for a given role. If the role is not recognized, it returns the default
   * capacity.
   *
   * @param role The role for which to get the rate limit.
   * @return The rate limit for the specified role.
   */
  public int getLimitForRole(String role) {
    return switch (role.toUpperCase()) {
      case "ADMIN" -> adminLimit;
      case "CUSTOMER" -> customerLimit;
      default -> defaultLimit;
    };
  }
}
