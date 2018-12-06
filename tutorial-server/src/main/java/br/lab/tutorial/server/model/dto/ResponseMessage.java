/*
 *  Petrobras Distribuidora S.A.
 *  Todos os direitos reservados.
 *  Copyright (C) 2018 bq4d
 */
package br.lab.tutorial.server.model.dto;

/**
 *
 * @author bq4d
 */
public class ResponseMessage {
    
    private String message;

    public ResponseMessage(String message) {
            this.message = message;
    }

    public String getMessage() {
            return message;
    }

    public void setMessage(String message) {
            this.message = message;
    }
}