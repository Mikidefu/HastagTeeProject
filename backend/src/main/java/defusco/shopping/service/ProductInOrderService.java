package defusco.shopping.service;

import defusco.shopping.entity.User;
import defusco.shopping.entity.ProductInOrder;

public interface ProductInOrderService {
    void update(String itemId, Integer quantity, User user);
    ProductInOrder findOne(String itemId, User user);
}
