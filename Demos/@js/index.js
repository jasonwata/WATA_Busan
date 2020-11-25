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
        disableMobile: true,
        defaultDate: moment().subtract(30, "minutes").format("hh:mm"),
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
        disableMobile: true,
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
    let navVarAgeRange = document.getElementById("navVarAgeRange");
    navVarAgeRange.innerText = "전체";
    $("#navVarAgeRangeVal").change(function () {
        let $this = $(this);

        let from = $this.data("from");
        let to = $this.data("to");

        let min = $this.data("min");
        let max = $this.data("max");

        let text = `${from}세 ~ ${to}세`;
        if (Number(from) === Number(min) && Number(to) === Number(max)) {
            text = "전체";
        }

        navVarAgeRange.innerText = text;
    });

    // 체류시간
    let navVarVisitRange = document.getElementById("navVarVisitRange");
    let $navVarVisitRangeVal = $("#navVarVisitRangeVal");
    navVarVisitRange.innerText = `${navVarVisitRangeVal.dataset.from}분 ~ ${navVarVisitRangeVal.dataset.to}분`;
    $navVarVisitRangeVal.change(function () {
        let $this = $(this);

        let from = $this.data("from");
        let to = $this.data("to");

        navVarVisitRange.innerText = `${from}분 ~ ${to}분`;
    });

    // 버튼 클릭 후 툴팁 숨기기
    $('[data-toggle=tooltip]').on('click', function () {
        $(this).tooltip('hide')
    });

    // 버튼 클릭 후 남아있는 잔상 삭제
    $('.btn').mouseup(function () {
        $(this).blur();
    });

    let $panel = $('#slide-panel');
    if (!$panel.hasClass("visible")) {
        $("#opener").addClass('active');
    }

    // 부가기능 버튼 활성화
    $('.btn-extra').click(function () {
        let $this = $(this);
        $('.btn-extra').each(function (index, item) {
            if ($this.get(0) !== $(item).get(0)) {
                $(item).removeClass('active');
            }
        });

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).removeClass('active');
            $(this).addClass('active');
        }
    });

    // 지도 설정 드랍박스 닫는 여부 체크
    $('#layer-kind').on('hide.bs.dropdown', function (e) {
        let $this = $(this)
        if ($this.find('li a.current').length > 0) {
            e.preventDefault();
        }
    });


})();