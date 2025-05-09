package defusco.shopping.repository;

import defusco.shopping.entity.ProductInOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductInOrderRepository extends JpaRepository<ProductInOrder, Long> {

}
