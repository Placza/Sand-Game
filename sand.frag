precision highp float;

varying vec2 pos;

uniform float mouseCoordX;
uniform float mouseCoordY;
uniform float pixelSizeX;
uniform float pixelSizeY;
uniform float size;
uniform sampler2D prevFrame;


void main() {
    vec4 current = texture2D(prevFrame, pos);

    vec2 belowPos = pos + vec2(0.0, pixelSizeY);
    vec2 abovePos = pos - vec2(0.0, pixelSizeY);

    if (belowPos.y > 1.) {
        gl_FragColor = current;
        return;
    }

    vec3 circle = vec3(mouseCoordX, mouseCoordY, size);
    float d = length(pos - circle.xy);
    if (d < size) {
        current = vec4(0., 0., 0., 1.);
    }
    
    vec4 below = texture2D(prevFrame, belowPos);
    vec4 above = texture2D(prevFrame, abovePos);

    bool isEmpty = distance(current, vec4(1., 1., 1., 1.)) <= 1.;
    bool isSand = distance(current, vec4(0., 0., 0., 1.)) <= 0.;

    bool isEmptyBelow = distance(below, vec4(1., 1., 1., 1.)) <= 1.;
    bool sandAbove = distance(above, vec4(0., 0., 0., 1.)) <= 0.;
    bool sandBelow = distance(below, vec4(0., 0., 0., 1.)) <= 0.;

    if (sandAbove && isEmpty) {
        current = above;
    }
  
    

    gl_FragColor = current;
}