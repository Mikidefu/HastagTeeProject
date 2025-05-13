package defusco.shopping.service;


import defusco.shopping.entity.ProductInfo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductService {

    ProductInfo findOne(String productId);

    // Tutte le magliette in vendita
    Page<ProductInfo> findUpAll(Pageable pageable);
    // Tutte le magliette
    Page<ProductInfo> findAll(Pageable pageable);
    // Tutte le magliette di una taglia
    Page<ProductInfo> findAllInCategory(Integer categoryType, Pageable pageable);

    // aumenta lo stock
    void increaseStock(String productId, int amount);

    //decrementa lo stock
    void decreaseStock(String productId, int amount);

    ProductInfo offSale(String productId);

    ProductInfo onSale(String productId);

    ProductInfo update(ProductInfo productInfo);
    ProductInfo save(ProductInfo productInfo);

    void delete(String productId);


}
