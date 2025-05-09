package defusco.shopping.enums;

public enum OrderStatusEnum implements CodeEnum {
    NEW(0, "Nuovo OrderMain"),
    FINISHED(1, "Completato"),
    CANCELED(2, "Cancellato")
    ;

    private  int code;
    private String msg;

    OrderStatusEnum(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    @Override
    public Integer getCode() {
        return code;
    }
}
