package com.mynextduty.core.service.impl;

import com.mynextduty.core.service.BlackListTokenService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class BlackListTokenServiceImpl implements BlackListTokenService {
  @Override
  public boolean isTokenBlackListed(String token) {
    return false;
  }

  @Override
  public boolean blackListRefreshToken(String refreshToken) {
    return false;
  }

  @Override
  public boolean blackListAccessToken(String accessToken) {
    return false;
  }
}
