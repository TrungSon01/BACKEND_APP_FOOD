{{BASE_URL}} : http://localhost:3001/api

--------- API 01: {{BASE_URL}}/like/unlikeOrLike

- Method: POST
- xử lí like và bỏ like , đã kiểm tra trường hợp :

* user, res hợp lệ loại bỏ trường hợp id <= 0, loại bỏ trường hợp ko có trong database -> ko cho like

* loại bỏ trường hợp ko truyền gì (data bị undefine) , gọi bừa

--------- API02: {{BASE_URL}}/like/getLike

- Method: GET
- lấy thông tin người like theo user_id và id của nhà hàng, đã kiểm tra trường hợp :

* user và nhà hàng phải tồn tại
* chỉ cần truyền json 1 trong 2 trường user_id hoặc res_id nếu muốn tìm theo trường nào. có thể truyền cả 2 trả rỗng nếu user ko like nhà hàng này
* loại bỏ trường hợp ko truyền data bị undefine

--------- API03: {{BASE_URL}}/restaurant/addRate

- Method: POST
- thêm đánh giá nhà hàng, đã kiểm tra trường hợp :

* ko cho user addRate nếu ko có trong dtb hoặc ko addRate nếu nhà hàng ko có trong database
* loại bỏ trường hợp ko truyền gì dữ liệu undefine
* chỉ cho phép rate hợp lệ 1 <= rate <= 5

--------- API04: {{BASE_URL}}/restaurant/getRate

- Method: GET
- lấy thông tin nhà hàng và người dùng đánh giá nhà hàng
- chỉ cần truyền 1 trong 2 nếu truyền res_id thì lấy tất cả thông tin người đã like nhà hàng, nếu chỉ truyền user_id thì lấy tất cả nhà hàng đã được user đó like.
- đã kiểm tra các trường hợp :

* user và nhà hàng ko có trong database
* người lấy thông tin không hợp lệ . lấy thông tin nhà hàng ko có trong database , hoặc người ko trong hệ thống lấy
* không truyền gì khiến data undefine

--------- API05: {{BASE_URL}}/order/UserOrderFood

- Method: POST
- user đặt đồ ăn , phải truyền user_id, res_id , amount . 2 field code và arr_sub_id có thể có hoặc ko cần.
- đã kiểm tra các trường hợp :

* người đặt ko có trong hệ thống, người đặt gửi các món ăn nằm ở ngoài phạm vi nhà hàng,
* dữ liệu ko hợp lệ (số lượng food âm , ko gửi data chỉ gọi api khiến data bị undefine)
