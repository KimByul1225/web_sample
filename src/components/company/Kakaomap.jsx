
/*global kakao */
import {useEffect} from "react";
import "@/resources/styles/marker.css";
import markerSample from "@/resources/images/company/marker_sample.png"


function Kakaomap(){
    useEffect(() => {
        mapscript();
    }, []);
    
    const mapscript = () => {
        let container = document.getElementById("map");
        let options = {
            //집 위치로 변경
            center: new kakao.maps.LatLng(37.4061737, 126.9730445),
            level: 2,
        };
        //map
        const map = new kakao.maps.Map(container, options);
        //마커 위치 현재 위치와 동일하게 설정.
        let markerPosition = new kakao.maps.LatLng(
            37.4061737, 
            126.9730445
        );
        // 마커생성
        let marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        
        const content = `
            <div class="map_wrap">
                <div class="map_info">
                    <div class="map_title">Lorem ipsum dolor</div>
                    <div class="map_body">
                        <div class="map_img">
                            <img src="${markerSample}" alt="샘플 이미지" width="70" heigth="70"/>
                        </div>
                        <div class="map_desc">
                            <div class="ellipsis">안양시 동안구 동편로 20번길 43</div>
                            <div class="jibun ellipsis">데이드림 오피스텔 (1722-1)</div>
                            <div class="jibun ellipsis">010-3092-1356</div>
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