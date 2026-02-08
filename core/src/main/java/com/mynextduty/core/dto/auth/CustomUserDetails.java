package com.mynextduty.core.dto.auth;

import java.util.Collection;
import java.util.Collections;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Getter
@Setter
@RequiredArgsConstructor
@ToString
@Builder
public class CustomUserDetails implements UserDetails {
  private final Long userId;
  private final String username;
  private final String password;
  private final String role;
  private final boolean isVerified;

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + role));
  }

  @Override
  public boolean isAccountNonExpired() {
    return isEnabled();
  }

  @Override
  public boolean isAccountNonLocked() {
    return isEnabled();
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return isEnabled();
  }

  @Override
  public boolean isEnabled() {
    return isVerified;
  }
}
