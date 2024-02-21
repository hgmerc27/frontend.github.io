function nhapThongTinSV() {
    let soLuongSV = document.getElementById("soLuongSV").value;
    let danhSachSV = [];
    for (let i = 0; i < soLuongSV; i++) {
        let maSV = "MSSV" + (i + 1);
        let hoTen = prompt("Nhập họ tên sinh viên " + maSV + ":");
        let ngaySinh = prompt("Nhập ngày sinh sinh viên " + maSV + " (dd/mm/yyyy):");
        let lopHoc = prompt("Nhập lớp học sinh viên " + maSV + ":");
        let diemGPA = prompt("Nhập điểm GPA sinh viên " + maSV + ":");

        let sinhVien = {
            maSV: maSV,
            hoTen: hoTen,
            ngaySinh: ngaySinh,
            lopHoc: lopHoc,
            diemGPA: diemGPA,
        };
        danhSachSV.push(sinhVien);
    }
    localStorage.setItem("danhSachSV", JSON.stringify(danhSachSV));
}

function hienThiThongTinSV() {
    let danhSachSV = JSON.parse(localStorage.getItem("danhSachSV"));
    let html = "";
    for (let sinhVien of danhSachSV) {
        html += `
            <div class="sinhvien">
                <h2>${sinhVien.maSV}</h2>
                <p>Họ tên: ${sinhVien.hoTen}</p>
                <p>Ngày sinh: ${sinhVien.ngaySinh}</p>
                <p>Lớp học: ${sinhVien.lopHoc}</p>
                <p>Điểm GPA: ${sinhVien.diemGPA}</p>
            </div>
        `;
    }
    document.getElementById("danhSachSV").innerHTML = html;
}

// Cập nhật thông tin
function capNhatThongTinSV(maSV) {
    let sinhVien = danhSachSV.find((sv) => sv.maSV === maSV);
    // Lấy thông tin mới từ người dùng
    let hoTen = prompt("Nhập họ tên mới cho sinh viên " + maSV + ":");
    let ngaySinh = prompt("Nhập ngày sinh mới cho sinh viên " + maSV + " (dd/mm/yyyy):");
    let lopHoc = prompt("Nhập lớp học mới cho sinh viên " + maSV + ":");
    let diemGPA = prompt("Nhập điểm GPA mới cho sinh viên " + maSV + ":");

    // Cập nhật thông tin sinh viên
    sinhVien.hoTen = hoTen;
    sinhVien.ngaySinh = ngaySinh;
    sinhVien.lopHoc = lopHoc;
    sinhVien.diemGPA = diemGPA;

    // Lưu trữ danh sách sinh viên đã cập nhật
    localStorage.setItem("danhSachSV", JSON.stringify(danhSachSV));

    // Hiển thị lại thông tin sinh viên
    hienThiThongTinSV();
}
