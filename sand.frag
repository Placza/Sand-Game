precision highp float;

varying vec2 pos;

uniform float mouseCoordX;
uniform float mouseCoordY;
uniform float size;
uniform sampler2D prevFrame;


void main() {
    vec4 current = texture2D(prevFrame, pos);

    vec3 circle = vec3(mouseCoordX, mouseCoordY, size);
    float d = length(pos - circle.xy);
    
    if (d < size) {
        current = vec4(0., 0., 0., 1.);
    }
    


    gl_FragColor = current;
}