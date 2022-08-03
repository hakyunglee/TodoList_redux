import React from "react";
import styled from "styled-components";

const Detail = () => {

    return(
        <DetailBox>
            <div className="detailbox">
                <div>상세보기 페이지</div>
            </div>
        </DetailBox>

    )
}
export { Detail }

const DetailBox = styled.div`
    display: flex;
    justify-content : space-between
`