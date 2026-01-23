package com.mynextduty.core.service;

public interface BlackListTokenService {
  boolean isTokenBlackListed(String token);

  boolean blackListRefreshToken(String refreshToken);

  boolean blackListAccessToken(String accessToken);
}
