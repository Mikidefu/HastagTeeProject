package defusco.shopping.enums;

import lombok.Getter;

@Getter
public enum ResultEnum  {

    PARAM_ERROR(1, "Errore di parametri!"),
    PRODUCT_NOT_EXIST(10, "Il prodotto non esiste!"),
    PRODUCT_NOT_ENOUGH(11, "Non ci sono abbastaza prodotti in stock!"),
    PRODUCT_STATUS_ERROR(12, "Lo stato prodotto e' incorretto!"),
    PRODUCT_OFF_SALE(13,"Il prodotto non è in vendita!"),
    PRODUCT_NOT_IN_CART(14,"Il prodotto non è nel carrello!"),
    CART_CHECKOUT_SUCCESS(20, "Checkout completato con successo! "),

    CATEGORY_NOT_FOUND(30, "La categoria non esiste!"),

    ORDER_NOT_FOUND(60, "L'OrderMain non esiste!"),
    ORDER_STATUS_ERROR(61, "Lo stato ordine e' incorretto!"),


    VALID_ERROR(50, "Informazioni sbagliate"),
    USER_NOT_FOUNT(40,"Utente non trovato")
    ;

    private Integer code;

    private String message;

    ResultEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }
}
