class Validation {
    kiemTraRong(value, idSpan, message) {
        if (value !== "") {
            // Valid: clear error message and hide span
            document.querySelector(idSpan).innerHTML = "";
            document.querySelector(idSpan).style.display = "none";
            return true;
        }

        // Invalid: set error message and show span
        document.querySelector(idSpan).innerHTML = message;
        document.querySelector(idSpan).style.display = "block";
        return false;
    }

    kiemTraEmail(value, idSpan, message) {
        const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(pattern)) {
            // Valid: clear error message and hide span
            document.querySelector(idSpan).innerHTML = "";
            document.querySelector(idSpan).style.display = "none";
            return true;
        }

        // Invalid: set error message and show span
        document.querySelector(idSpan).innerHTML = message;
        document.querySelector(idSpan).style.display = "block";
        return false;
    }

    kiemTraTen =  function(value,idSpan, message){
        let pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/

        if(value.match(pattern)){
            //* hop le
            document.querySelector(idSpan).innerHTML = ""
            document.querySelector(idSpan).style.display = "none"
            return true
        }
        //! khong hop le
        document.querySelector(idSpan).innerHTML = message
        document.querySelector(idSpan).style.display = "block"
        return false
    }

    kiemTraPassword = function(value, idSpan, message) {
        let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/

        if(value.match(pattern)){
            //* hop le
            document.querySelector(idSpan).innerHTML = ""
            document.querySelector(idSpan).style.display = "none"
            return true
        }
        //! khong hop le
        document.querySelector(idSpan).innerHTML = message
        document.querySelector(idSpan).style.display = "block"
        return false
    }

    kiemTraPhone = function(value, idSpan, message) {
        let pattern = /^[0-9]+$/

        if(value.match(pattern)){
            //* hop le
            document.querySelector(idSpan).innerHTML = ""
            document.querySelector(idSpan).style.display = "none"
            return true
        }
        //! khong hop le
        document.querySelector(idSpan).innerHTML = message
        document.querySelector(idSpan).style.display = "block"
        return false
    }
}