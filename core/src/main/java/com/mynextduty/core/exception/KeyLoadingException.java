package com.mynextduty.core.exception;

import lombok.NonNull;

public class KeyLoadingException extends RuntimeException {
  public KeyLoadingException(@NonNull String message) {
    super(message);
  }

  public KeyLoadingException(String message, Throwable cause) {
    super(message, cause);
  }

  public KeyLoadingException(Throwable cause) {
    super(cause);
  }

  protected KeyLoadingException(
      String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
    super(message, cause, enableSuppression, writableStackTrace);
  }
}
