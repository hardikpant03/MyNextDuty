package com.mynextduty.core.exception;

import lombok.NonNull;

public class GenericApplicationException extends RuntimeException {
  public GenericApplicationException(@NonNull String message) {
    super(message);
  }

  public GenericApplicationException(String message, Throwable cause) {
    super(message, cause);
  }

  public GenericApplicationException(Throwable cause) {
    super(cause);
  }

  protected GenericApplicationException(
      String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
    super(message, cause, enableSuppression, writableStackTrace);
  }
}
