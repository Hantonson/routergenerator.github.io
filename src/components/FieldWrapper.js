import { ScrollView } from "react-native-web";
import {useRef} from "react";
import {EndpointContainer} from "./EndpointContainer";

export function FieldWrapper({endpoints, setEndpoints}) {
    const scrollRef = useRef();

    const removeEndpoint = (key) => {
        setEndpoints(endpoints.filter(endpoint => endpoint.key !== key));
    };

    const onRouteChange = (value, index) => {
        const newEndpoints = [...endpoints];
        newEndpoints[index].route = value;
        setEndpoints(newEndpoints);
    }

    return (
        <ScrollView style={{flex: 1}}  ref={scrollRef} onContentSizeChange ={()=>{scrollRef.current.scrollToEnd();}}>
            {endpoints.map((endpoint, index) => (
                <EndpointContainer key={index}
                                   index={index}
                                   endpoint={endpoint}
                                   removeEndpoint={removeEndpoint}
                                   onRouteChange={onRouteChange}
                />
            ))}
        </ScrollView>
    )
}

