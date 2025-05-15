


INSERT INTO "public"."order_main" VALUES (2147483643, 'Via Alimena, 14', 'cliente2@email.com', 'cliente2', '2343456', '2024-03-15 12:52:20.439', 14.90, 0, '2024-03-15 12:52:20.439');
INSERT INTO "public"."order_main" VALUES (2147483645, 'Via Alimena, 14', 'cliente2@email.com', 'cliente2', '2343456', '2024-03-15 12:52:29.007', 20.97, 0, '2024-03-15 12:52:29.007');
INSERT INTO "public"."order_main" VALUES (2147483649, 'Via Alimena, 14', 'cliente2@email.com', 'cliente2', '2343456', '2024-03-15 12:52:07.428', 11.65, 2, '2024-03-15 12:52:53.664');
INSERT INTO "public"."order_main" VALUES (2147483647, 'Via Alimena, 14', 'cliente2@email.com', 'cliente2', '2343456', '2024-03-15 12:52:35.289', 4.99, 2, '2024-03-15 12:52:55.919');
INSERT INTO "public"."order_main" VALUES (2147483646, 'Via Alimena, 14', 'cliente2@email.com', 'cliente2', '2343456', '2024-03-15 12:58:23.824', 19.99, 0, '2024-03-15 12:58:23.824');
INSERT INTO "public"."order_main" VALUES (2147483643, 'Via Popilia, 23', 'cliente1@email.com', 'cliente1', '123456789', '2025-03-15 13:01:16.271', 14.90, 2, '2025-03-15 13:02:52.067');
INSERT INTO "public"."order_main" VALUES (2147483648, 'Via Popilia, 23', 'cliente1@email.com', 'cliente1', '123456789', '2025-03-15 13:01:06.943', 4.99, 1, '2025-03-15 13:02:56.498');

-- ----------------------------
-- Strutture per taglie

-- ----------------------------
-- Record di taglia
-- ----------------------------
INSERT INTO "public"."product_category" VALUES (2147483641, 'S', 0, '2024-01-01 23:25:27', '2024-01-01 23:29:27');
INSERT INTO "public"."product_category" VALUES (2147483642, 'L', 2, '2024-02-01 21:35:17', '2024-02-01 21:35:17');
INSERT INTO "public"."product_category" VALUES (2147483644, 'XL', 3, '2025-03-10 04:05:59', '2025-03-10 04:05:59');
INSERT INTO "public"."product_category" VALUES (2147483645, 'M', 1, '2025-03-10 00:26:05', '2025-03-10 00:26:05');


-- ----------------------------
-- Record di prodottiOrdine
-- ----------------------------


-- Ordine con Maglietta Monkey D. Luffy
INSERT INTO "public"."product_in_order" VALUES (2147483642, 0,1,'T-Shirt Monkey D. Luffy', 'https://m.media-amazon.com/images/I/51l9J-qK-WL._AC_SX569_.jpg', 'B0001', 'Maglia One Piece', 30.00,112,NULL, 2147483641);

-- Ordine con Maglietta Uomo Nike Sportswear Club
INSERT INTO "public"."product_in_order" VALUES (2147483643, 3,1,'T-shirt Nike Sportswear Club', 'https://m.media-amazon.com/images/I/51RrSg2H3rL._AC_SY606_.jpg', 'B0002', 'Maglietta Uomo Nike Nera', 14.90,150,NULL, 2147483643);

-- Ordine con Maglietta Donna Fruit of the Loom Valueweight
INSERT INTO "public"."product_in_order" VALUES (2147483644, 1,1,'T-shirt Donna Fruit of the Loom', 'https://m.media-amazon.com/images/I/71jCgHZanOL._AC_SX569_.jpg', 'B0003', 'Maglietta Donna Bianca', 20.97,200,NULL, 2147483645);

-- Ordine con Maglietta Uomo Under Armour HeatGear Armour
INSERT INTO "public"."product_in_order" VALUES (2147483645, 2,1,'Under Armour HeatGear Armour', 'https://m.media-amazon.com/images/I/31JDEAN8p7L._AC_SX569_.jpg', 'B0004', 'Maglietta Uomo Sportiva', 19.99,180,NULL, 2147483646);

-- Ordine con Maglietta Donna CHEMAGLIETTE! Cotone
INSERT INTO "public"."product_in_order" VALUES (2147483646, 0,1,'CHEMAGLIETTE! T Shirt Donna', 'https://m.media-amazon.com/images/I/7159B+KUuhL._AC_SX679_.jpg', 'B0005', 'Maglietta Donna Cotone', 4.99,90,NULL, 2147483647);

-- Ordine con Maglietta Uomo Tommy Hilfiger
INSERT INTO "public"."product_in_order" VALUES (2147483647, 1,1,'Tommy Hilfinger T-Shirt', 'https://m.media-amazon.com/images/I/61w6qa9imdL._AC_SX466_.jpg', 'B0005', 'Maglietta Donna Cotone', 4.99,90,NULL, 2147483648);

-- Ordine con Maglietta Uomo Fruit of The Loom Iconic 150
INSERT INTO "public"."product_in_order" VALUES (2147483648, 2,1,'Fruit of The Loom Iconic 150', 'https://m.media-amazon.com/images/I/71YeE9sYFLL._AC_SX569_.jpg', 'B0007', 'Maglietta Donna Manica', 11.65,110,NULL, 2147483649);

-- Ordine con Maglietta Uomo Levi's Verde
INSERT INTO "public"."product_in_order" VALUES (2147483649, 3,1,'Levis T-shirt Uomo Verde', 'https://m.media-amazon.com/images/I/51mqhPzcXwL._AC_SX569_.jpg', 'B0008', 'Maglietta Uomo Verde', 18.18,140,NULL, 2147483650);


-- ----------------------------
-- Recorddi info prodotti
-- ----------------------------

-- Maglietta Monkey D. Luffy
INSERT INTO "public"."product_info" VALUES ('B0001', 0, '2024-03-10 06:44:25', 'T Shirt Monkey D. Luffy', 'https://m.media-amazon.com/images/I/51l9J-qK-WL._AC_SX569_.jpg', 'Maglia One Piece', 30.00, 0, 112, '2025-03-10 06:46:25');

-- Maglietta Uomo Nike Sportswear Club
INSERT INTO "public"."product_info" VALUES ('B0002', 3, '2025-05-06 10:00:00', 'T-shirt Nike Sportswear Club', 'https://m.media-amazon.com/images/I/51RrSg2H3rL._AC_SY606_.jpg', 'Maglietta Uomo Nike Nera', 14.90, 0, 150, '2025-05-06 10:06:00');

-- Maglietta Donna Fruit of the Loom Valueweight (5 Pack)
INSERT INTO "public"."product_info" VALUES ('B0003', 1, '2025-05-06 10:00:00', 'T-shirt Donna Fruit of the Loom', 'https://m.media-amazon.com/images/I/71jCgHZanOL._AC_SX569_.jpg', 'Maglietta Donna Bianca', 20.97, 0, 200, '2025-05-06 10:06:00');

-- Maglietta Uomo Under Armour HeatGear Armour
INSERT INTO "public"."product_info" VALUES ('B0004', 2, '2025-05-06 10:00:00', 'Under Armour HeatGear Armour', 'https://m.media-amazon.com/images/I/31JDEAN8p7L._AC_SX569_.jpg', 'Maglietta Uomo Sportiva', 19.99, 0, 180, '2025-05-06 10:06:00');

-- Maglietta Donna CHEMAGLIETTE! Cotone
INSERT INTO "public"."product_info" VALUES ('B0005', 0, '2025-05-06 10:00:00', 'CHEMAGLIETTE! T Shirt Donna', 'https://m.media-amazon.com/images/I/7159B+KUuhL._AC_SX679_.jpg', 'Maglietta Donna Cotone', 4.99, 0, 90, '2025-05-06 10:06:00');

-- Maglietta Uomo Tommy Hilfiger
INSERT INTO "public"."product_info" VALUES ('B0006', 1, '2025-05-06 10:00:00', 'Tommy Hilfiger T-shirt Uomo', 'https://m.media-amazon.com/images/I/61w6qa9imdL._AC_SX466_.jpg', 'Maglietta Uomo Classica', 26.99, 0, 130, '2025-05-06 10:06:00');

-- Maglietta Uomo Fruit of The Loom Iconic 150
INSERT INTO "public"."product_info" VALUES ('B0007', 2, '2025-05-06 10:00:00', 'Fruit of The Loom Iconic 150', 'https://m.media-amazon.com/images/I/71YeE9sYFLL._AC_SX569_.jpg', 'Maglietta Donna Manica', 11.65, 0, 110, '2025-05-06 10:06:00');

-- Maglietta Uomo Levi's Verde
INSERT INTO "public"."product_info" VALUES ('B0008', 3, '2025-05-06 10:00:00', 'Levis T-shirt Uomo Verde', 'https://m.media-amazon.com/images/I/51mqhPzcXwL._AC_SX569_.jpg', 'Maglietta Uomo Verde', 18.18, 0, 140, '2025-05-06 10:06:00');


-- ----------------------------
-- Record di utenti
-- ----------------------------
INSERT INTO "public"."users" VALUES (2147483641, 't', 'Via Popilia, 23', 'cliente1@email.com', 'cliente1', '$2a$10$PrI5Gk9L.tSZiW9FXhTS8O8Mz9E97k2FZbFvGFFaSsiTUIl.TCrFu', '123456789', 'ROLE_CUSTOMER');
INSERT INTO "public"."users" VALUES (2147483642, 't', 'Via Pomponio Leto, 1', 'manager1@email.com', 'manager1', '$2a$10$PrI5Gk9L.tSZiW9FXhTS8O8Mz9E97k2FZbFvGFFaSsiTUIl.TCrFu', '987654321', 'ROLE_MANAGER');
INSERT INTO "public"."users" VALUES (2147483643, 't', 'Corso Mazzini, 25', 'operatore1@email.com', 'operatore1', '$2a$10$PrI5Gk9L.tSZiW9FXhTS8O8Mz9E97k2FZbFvGFFaSsiTUIl.TCrFu', '123123122', 'ROLE_EMPLOYEE');
INSERT INTO "public"."users" VALUES (2147483645, 't', 'Via Alimena,14', 'cliente2@email.com', 'cliente2', '$2a$10$0oho5eUbDqKrLH026A2YXuCGnpq07xJpuG/Qu.PYb1VCvi2VMXWNi', '2343456', 'ROLE_CUSTOMER');

-- ----------------------------
-- Record di carrello
-- ----------------------------
INSERT INTO "public"."cart" VALUES (2147483641);
INSERT INTO "public"."cart" VALUES (2147483642);
INSERT INTO "public"."cart" VALUES (2147483643);
INSERT INTO "public"."cart" VALUES (2147483645);


