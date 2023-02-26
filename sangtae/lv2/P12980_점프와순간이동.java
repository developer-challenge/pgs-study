import java.util.*;
public class P12980_점프와순간이동 {
    public int solution(int n) {
        int ans = 1;
        while(n>1){
            if(n%2 == 0){
                n/=2;
            }else{
                n-=1;
                n/=2;
                ans++;
            }
        }

        return ans;
    }
}
