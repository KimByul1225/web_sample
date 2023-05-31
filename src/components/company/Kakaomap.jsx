
/*global kakao */
import {useEffect} from "react";
// import insightDefault from "../../resources/img/map_logo.png"

function Kakaomap(){
    useEffect(() => {
        mapscript();
    }, []);
    
    const mapscript = () => {
        let container = document.getElementById("map");
        let options = {
            //집 위치로 변경
            center: new kakao.maps.LatLng(37.56193113014863, 126.99103589326943),
            level: 2,
        };
        //map
        const map = new kakao.maps.Map(container, options);
        //마커 위치 현재 위치와 동일하게 설정.
        let markerPosition = new kakao.maps.LatLng(
            37.56193113014863,
            126.99103589326943
        );
        // 마커생성
        let marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        // // <img src="${insightDefault}" alt="오시는길 회사로고" width="70" heigth="70"/>
        const content = `
            <div class="map_wrap">
                <div class="map_info">
                    <div class="map_title">서스틴베스트</div>
                    <div class="map_body">
                        <div class="map_img">
                            
                        </div>
                        <div class="map_desc">
                            <div class="ellipsis">서울특별시 중구 퇴계로 137 </div>
                            <div class="jibun ellipsis">남산스퀘어 22층 (04554)</div>
                            <div class="jibun ellipsis">02-6310-9300</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        //마커 정보 생성    
        const overlay = new kakao.maps.CustomOverlay({
            content: content,
            map: map,
            position: marker.getPosition()       
        });

        // 마커 그리기
        marker.setMap(map);
        // 마커 인포 그리기
        overlay.setMap(map);
    };
    return(
        <div id="map"  style={{
            width:'100%',
            height:'100%'
        }}>
        </div>
    )
}

export default Kakaomap;