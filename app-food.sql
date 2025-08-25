DROP DATABASE app_food;
create database app_food;
use app_food;
-- tạo bảng trong database
create table `user` (
    user_id int auto_increment primary key,
    full_name varchar(255),
    email varchar(255),
    `password` varchar(255)
);

create table restaurant (
    res_id int auto_increment primary key,
    res_name varchar(255),
    image varchar(255),
    `desc` varchar(500)
);

create table food_type (
    type_id int auto_increment primary key,
    type_name varchar(255)
);


create table food (
    food_id int auto_increment primary key,
    food_name varchar(255),
    image varchar(255),
    price FLOAT,
    `desc` varchar(500),
    type_id INT,
    foreign key (type_id) references food_type(type_id)
);

create table sub_food (
    sub_id int auto_increment primary key,
    sub_name varchar(255),
    sub_price float,
    food_id int,
    foreign key (food_id) references food(food_id)
);


create table `order` (
    order_id int auto_increment primary key,
    user_id int,
    food_id int,
    amount int,
    code varchar(255),
    arr_sub_id varchar(255),
    foreign key (user_id) references user(user_id),
    foreign key (food_id) references food(food_id)
);


create table rate_res (
    user_id int,
    res_id int,
    amount int,
    date_rate datetime,
    primary key (user_id, res_id),
    foreign key (user_id) references user(user_id),
    foreign key (res_id) references restaurant(res_id)
);


create table like_res (
    user_id int,
    res_id int,
    date_like datetime,
    primary key (user_id, res_id),
    foreign key (user_id) references user(user_id),
    foreign key(res_id) references restaurant(res_id)
);

-- DỮ LIỆU MẪU


-- 1) USER: 35 bản ghi
INSERT INTO `user` (full_name, email, `password`) VALUES
('User 01', 'user01@foodapp.com', 'pass01'),
('User 02', 'user02@foodapp.com', 'pass02'),
('User 03', 'user03@foodapp.com', 'pass03'),
('User 04', 'user04@foodapp.com', 'pass04'),
('User 05', 'user05@foodapp.com', 'pass05'),
('User 06', 'user06@foodapp.com', 'pass06'),
('User 07', 'user07@foodapp.com', 'pass07'),
('User 08', 'user08@foodapp.com', 'pass08'),
('User 09', 'user09@foodapp.com', 'pass09'),
('User 10', 'user10@foodapp.com', 'pass10'),
('User 11', 'user11@foodapp.com', 'pass11'),
('User 12', 'user12@foodapp.com', 'pass12'),
('User 13', 'user13@foodapp.com', 'pass13'),
('User 14', 'user14@foodapp.com', 'pass14'),
('User 15', 'user15@foodapp.com', 'pass15'),
('User 16', 'user16@foodapp.com', 'pass16'),
('User 17', 'user17@foodapp.com', 'pass17'),
('User 18', 'user18@foodapp.com', 'pass18'),
('User 19', 'user19@foodapp.com', 'pass19'),
('User 20', 'user20@foodapp.com', 'pass20'),
('User 21', 'user21@foodapp.com', 'pass21'),
('User 22', 'user22@foodapp.com', 'pass22'),
('User 23', 'user23@foodapp.com', 'pass23'),
('User 24', 'user24@foodapp.com', 'pass24'),
('User 25', 'user25@foodapp.com', 'pass25'),
('User 26', 'user26@foodapp.com', 'pass26'),
('User 27', 'user27@foodapp.com', 'pass27'),
('User 28', 'user28@foodapp.com', 'pass28'),
('User 29', 'user29@foodapp.com', 'pass29'),
('User 30', 'user30@foodapp.com', 'pass30'),
('User 31', 'user31@foodapp.com', 'pass31'),
('User 32', 'user32@foodapp.com', 'pass32'),
('User 33', 'user33@foodapp.com', 'pass33'),
('User 34', 'user34@foodapp.com', 'pass34'),
('User 35', 'user35@foodapp.com', 'pass35');

-- 2) RESTAURANT: 7 bản ghi
INSERT INTO restaurant (res_name, image, `desc`) VALUES
('Bếp Nhà Sen', 'res1.jpg', 'Ẩm thực Việt gần gũi.'),
('Hải Sản Biển Xanh', 'res2.jpg', 'Hải sản tươi sống mỗi ngày.'),
('Pizza Corner', 'res3.jpg', 'Pizza nướng lò đá hương vị Ý.'),
('Sushi Garden', 'res4.jpg', 'Sushi & sashimi chuẩn vị Nhật.'),
('Bún Phở 24', 'res5.jpg', 'Mì, bún, phở truyền thống.'),
('Sweet Tooth', 'res6.jpg', 'Bánh ngọt & tráng miệng.'),
('Tea & Coffee', 'res7.jpg', 'Đồ uống mát lạnh và cà phê.');

-- 3) FOOD_TYPE: 7 bản ghi
INSERT INTO food_type (type_name) VALUES
('Fast food'),
('Sushi'),
('Salad'),
('Mì/Phở'),
('Tráng miệng'),
('Đồ uống');

-- 4) FOOD: 7 bản ghi (tham chiếu food_type.type_id 1..7)
INSERT INTO food (food_name, image, price, `desc`, type_id) VALUES
-- FAST FOOD (type_id = 1)
('Cheeseburger', 'cheeseburger.jpg', 75000, 'Burger bò phô mai.', 1),
('Chicken Burger', 'chicken_burger.jpg', 70000, 'Burger gà giòn.', 1),
('French Fries', 'fries.jpg', 45000, 'Khoai tây chiên giòn.', 1),
('Hot Dog', 'hotdog.jpg', 60000, 'Xúc xích kẹp bánh mì.', 1),
('Fried Chicken', 'fried_chicken.jpg', 85000, 'Gà rán giòn tan.', 1),

-- SUSHI (type_id = 2)
('Salmon Sushi', 'salmon_sushi.jpg', 95000, 'Sushi cá hồi tươi.', 2),
('Tuna Sushi', 'tuna_sushi.jpg', 90000, 'Sushi cá ngừ tươi.', 2),
('Eel Sushi', 'eel_sushi.jpg', 99000, 'Sushi lươn nướng.', 2),
('California Roll', 'california_roll.jpg', 88000, 'Cuộn cơm California.', 2),
('Shrimp Tempura Roll', 'shrimp_roll.jpg', 92000, 'Cuộn tôm tempura.', 2),

-- SALAD (type_id = 3)
('Caesar Salad', 'caesar_salad.jpg', 69000, 'Salad gà sốt Caesar.', 3),
('Greek Salad', 'greek_salad.jpg', 70000, 'Salad Hy Lạp rau củ và phô mai.', 3),
('Fruit Salad', 'fruit_salad.jpg', 65000, 'Salad trái cây tươi.', 3),
('Tuna Salad', 'tuna_salad.jpg', 72000, 'Salad cá ngừ.', 3),
('Chicken Salad', 'chicken_salad.jpg', 74000, 'Salad gà nướng.', 3),

-- MÌ/PHỞ (type_id = 4)
('Phở Bò', 'pho_bo.jpg', 65000, 'Phở bò truyền thống.', 4),
('Phở Gà', 'pho_ga.jpg', 60000, 'Phở gà truyền thống.', 4),
('Bún Chả', 'bun_cha.jpg', 70000, 'Bún chả Hà Nội.', 4),
('Mì Xào Hải Sản', 'mi_haisan.jpg', 80000, 'Mì xào hải sản.', 4),
('Bánh Canh Cua', 'banh_canh_cua.jpg', 75000, 'Bánh canh cua.', 4),

-- TRÁNG MIỆNG (type_id = 5)
('Tiramisu', 'tiramisu.jpg', 60000, 'Bánh tiramisu Ý.', 5),
('Che Khúc Bạch', 'che_khuc_bach.jpg', 55000, 'Chè khúc bạch mát lạnh.', 5),
('Kem Dừa', 'kem_dua.jpg', 50000, 'Kem dừa xiêm.', 5),
('Bánh Flan', 'flan.jpg', 35000, 'Bánh flan caramel.', 5),
('Panna Cotta', 'pannacotta.jpg', 58000, 'Tráng miệng panna cotta Ý.', 5),

-- ĐỒ UỐNG (type_id = 6)
('Trà Sữa Trân Châu', 'trasua.jpg', 55000, 'Trà sữa trân châu truyền thống.', 6),
('Nước Cam Ép', 'orange_juice.jpg', 40000, 'Nước cam ép tươi.', 6),
('Cà Phê Đen', 'coffee_black.jpg', 30000, 'Cà phê đen đá.', 6),
('Sinh Tố Bơ', 'smoothie_avocado.jpg', 50000, 'Sinh tố bơ béo ngậy.', 6),
('Matcha Latte', 'matcha_latte.jpg', 52000, 'Latte matcha Nhật Bản.', 6);


-- 5) SUB_FOOD: 7 bản ghi (tham chiếu food.food_id 1..7)
INSERT INTO sub_food (sub_name, sub_price, food_id) VALUES
('Thêm phô mai', 10000, 1),
('Thêm bacon', 12000, 2),
('Thêm wasabi', 5000, 3),
('Thêm croutons', 7000, 4),
('Thêm thịt bò', 15000, 5),
('Thêm kem tươi', 8000, 6),
('Thêm lát chanh', 3000, 7);

-- 6) ORDER: 7 bản ghi (tham chiếu user 1..35, food 1..7)
INSERT INTO `order` (user_id, food_id, amount, code, arr_sub_id) VALUES
(3, 1, 2, 'ORD0001', '1'),
(5, 2, 1, 'ORD0002', '2'),
(7, 3, 3, 'ORD0003', '3'),
(10, 4, 1, 'ORD0004', '4'),
(15, 5, 2, 'ORD0005', '5'),
(20, 6, 1, 'ORD0006', '6'),
(25, 7, 2, 'ORD0007', '7');

-- 7) RATE_RES: 7 bản ghi (khóa chính (user_id,res_id))
INSERT INTO rate_res (user_id, res_id, amount, date_rate) VALUES
(2, 1, 5, '2025-08-20 10:00:00'),
(4, 2, 4, '2025-08-20 11:00:00'),
(6, 3, 5, '2025-08-20 12:00:00'),
(8, 4, 3, '2025-08-20 13:00:00'),
(12, 5, 5, '2025-08-21 09:15:00'),
(14, 6, 4, '2025-08-21 10:45:00'),
(16, 7, 5, '2025-08-21 12:30:00');

-- 8) LIKE_RES: 7 bản ghi (khóa chính (user_id,res_id))
-- 30 user bất kỳ like nhà hàng trong bảng like_res
INSERT INTO like_res (user_id, res_id, date_like) VALUES
(1, 1, '2025-08-20 09:00:00'),
(2, 2, '2025-08-20 09:10:00'),
(3, 4, '2025-08-20 09:20:00'),
(4, 4, '2025-08-20 09:30:00'),
(5, 5, '2025-08-20 09:40:00'),
(6, 6, '2025-08-20 09:50:00'),
(7, 7, '2025-08-20 10:00:00'),
(8, 4, '2025-08-20 10:10:00'),
(9, 2, '2025-08-20 10:20:00'),
(10, 3, '2025-08-20 10:30:00'),
(11, 4, '2025-08-20 10:40:00'),
(12, 4, '2025-08-20 10:50:00'),
(13, 6, '2025-08-20 11:00:00'),
(14, 2, '2025-08-20 11:10:00'),
(15, 1, '2025-08-20 11:20:00'),
(16, 2, '2025-08-20 11:30:00'),
(17, 3, '2025-08-20 11:40:00'),
(18, 4, '2025-08-20 11:50:00'),
(19, 5, '2025-08-20 12:00:00'),
(20, 6, '2025-08-20 12:10:00'),	
(21, 7, '2025-08-20 12:20:00'),
(22, 2, '2025-08-20 12:30:00'),
(23, 2, '2025-08-20 12:40:00'),
(24, 3, '2025-08-20 12:50:00'),
(25, 4, '2025-08-20 13:00:00'),
(26, 5, '2025-08-20 13:10:00'),
(27, 6, '2025-08-20 13:20:00'),
(28, 7, '2025-08-20 13:30:00'),
(29, 5, '2025-08-20 13:40:00'),
(30, 5, '2025-08-20 13:50:00');
