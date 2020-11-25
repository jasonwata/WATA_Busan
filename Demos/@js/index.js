(function () {
    /* 20201124 차트 나오지 않아 임시로 수정 추후 실데이터 사용하려고 하면 샘플코드를 사용하지 않고 다시 프로그래밍 해야함 */
    document.getElementById('visitsByDeviceChart').height = 150;
    document.getElementById('visitsByDeviceChart').style.height = '150px';

    // 시작시간
    flatpickr("#navStartTime", {
        enableTime: true,
        noCalendar: true,
        altFormat: "H:i",
        dateFormat: "H:i",
        altInput: true,
        allowInput: true,
        wrap: true,
        static: true,
        defaultDate: moment().format("hh:mm"),
        onChange: function (selectedDates, dateStr, instance) {
            instance.element.querySelector("[data-toggle]").innerText = dateStr;
        }
    });

    // 종료시간
    flatpickr("#navEndTime", {
        enableTime: true,
        noCalendar: true,
        altFormat: "H:i",
        dateFormat: "H:i",
        altInput: true,
        allowInput: true,
        wrap: true,
        static: true,
        defaultDate: moment().format("hh:mm"),
        onChange: function (selectedDates, dateStr, instance) {
            instance.element.querySelector("[data-toggle]").innerText = dateStr;
        }
    });

    // 성별
    document.getElementsByName("navBarGenderVal").forEach(function (element) {
        element.addEventListener("click", function (e) {
            let value = e.target.value;
            let text = "전체";
            switch (Number(value)) {
                case 1:
                    text = "남";
                    break;
                case 2:
                    text = "여";
                    break;
            }

            document.getElementById("navBarGender").innerText = text;
        });
    });

    // 휴대폰
    document.getElementsByName("navBarDeviceTypeVal").forEach(function (element) {
        element.addEventListener("click", function (e) {
            let value = e.target.value;
            let text = "전체";
            switch (Number(value)) {
                case 1:
                    text = "Android";
                    break;
                case 2:
                    text = "iOS";
                    break;
            }

            document.getElementById("navBarDeviceType").innerText = text;
        });
    });

    // 연령
    $("#navVarAgeRangeVal").change(function () {
        let $this = $(this);

        let from = $this.data("from");
        let to = $this.data("to");

        document.getElementById("navVarAgeRange").innerText = `${from} ~ ${to}`
    });

    // 체류시간
    $("#navVarVisitRangeVal").change(function () {
        let $this = $(this);

        let from = $this.data("from");
        let to = $this.data("to");

        document.getElementById("navVarVisitRange").innerText = `${from} ~ ${to}`
    });

})();