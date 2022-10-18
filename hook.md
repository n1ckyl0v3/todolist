HOOK

Hook chỉ dùng cho funtion components

- Components khi dùng hook thì sẽ giúp cho components trở nên đơn giản hơn và dễ hiểu hơn

* Không bị chia logic ra như method trong lifecycle của Class components.
* Không cần sử dụng "this".

- Sử dịng Hook khi nào:

* Dự án mới => Hook.
* Dự án cũ:

  ** Components mới => Function components + Hook.
  ** Components cũ => Giữ nguyên, có thời gian tối ưu sau.

1/ useState: Trạng thái của dữ liệu

- Dùng khi nào:

* Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật.

- Cách dùng:

import { useState } from 'react';

funtion Components(){
const [state, setState] = useState(initState);
...
}

initState khi là một funtion thì nó sẽ lấy giá trị return của hàm

2/ useEffect

Dùng khi muốn thực hiện các Side Effects

Cú pháp: useEffect(callback, [deps]) => callback là bắt buộc còn đối số thứ 2 là không bắt buộc. Callback là để thực hiện các side effects

Thường dùng để:

- Update DOM

- Call API

- Listen DOM events

- Clean up

Có 3 trường hợp:

- useEffect(callback)

  => Gọi callback mỗi khi component re-render
  => Gọi callback mỗi khi component thêm element vào DOM

- useEffect(callback, [])

  => Chỉ gọi 1 lần sau khi component mounted

- useEffect(callback, [deps]

  => Callback được gọi lại mỗi khi deps thay đổi

---

Áp dụng với cả 3 TH trên:

=> Callback luôn được gọi sau khi component mounted

Clean là dùng return trong useEffect

- Hàm clean up luôn được gọi trước khi component unmounted
- Hàm clean up luôn được gọi trước khi call back được gọi (trừ lần mounted)
