package defusco.shopping.service;

import defusco.shopping.entity.User;
import defusco.shopping.entity.Cart;
import defusco.shopping.entity.ProductInOrder;

import java.util.Collection;

public interface CartService {
    Cart getCart(User user);

    void mergeLocalCart(Collection<ProductInOrder> productInOrders, User user);

    void delete(String itemId, User user);

    void checkout(User user);
}
