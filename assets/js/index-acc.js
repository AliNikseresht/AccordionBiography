

let _li = document.querySelectorAll('.acc>li')

    for(i=0; i<_li.length; i++){
        temp = document.querySelector('li:nth-of-type('+ (i+1) +') p').clientHeight
        temp = document.querySelector('li:nth-of-type('+ (i+1) +') img').clientHeight

        _li[i].setAttribute('data-height', temp)
        document.querySelector('li:nth-of-type('+ (i+1) +') p').style.height = '0px'
        document.querySelector('li:nth-of-type('+ (i+1) +') img').style.height = '0px'
    }

    function bio(self, num) {

        for (i = 1; i <= _li.length; i++) {

            if (i != num) {
                document.querySelector('li:nth-of-type(' + i + ') p').style.height = '0px'
                document.querySelector('li:nth-of-type(' + i + ') img').style.height = '0px'


                _li[i - 1].setAttribute('data-d', 'off')

                document.querySelector('li:nth-of-type(' + i + ') span').innerHTML = '<i class="bi bi-arrow-down-circle"></i>'
            }
        }

        let status = self.getAttribute('data-d')
        let allChild = self.children

        let row1 = allChild[0].children
        let row2 = allChild[1].children


        let _h = self.getAttribute('data-height')
        if (status == 'off') {
            row1[1].innerHTML = '<i class="bi bi-x-circle"></i>'
            self.setAttribute('data-d', 'on')
            row2[0].style.height = _h + 'px'
            row2[1].style.height = _h + 'px'

        }
        else {
            row1[1].innerHTML = '<i class="bi bi-arrow-down-circle"></i>'
            self.setAttribute('data-d', 'off')
            row2[0].style.height = '0px'
            row2[1].style.height = '0px'

        }

    }