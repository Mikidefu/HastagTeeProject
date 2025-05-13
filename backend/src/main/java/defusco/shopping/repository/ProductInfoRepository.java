package defusco.shopping.repository;

import defusco.shopping.entity.ProductInfo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductInfoRepository extends JpaRepository<ProductInfo, String> {
    ProductInfo findByProductId(String id);
    // Prodotti in vendita
    Page<ProductInfo> findAllByProductStatusOrderByProductIdAsc(Integer productStatus, Pageable pageable);

    // Prodotti di una taglia
    Page<ProductInfo> findAllByCategoryTypeOrderByProductIdAsc(Integer categoryType, Pageable pageable);

    Page<ProductInfo> findAllByOrderByProductId(Pageable pageable);

}
