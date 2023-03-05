import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class B1644_소수의연속합 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        if(N==1) {
            System.out.println("0");
            return;
        }
        boolean prime[] = new boolean[N+1];
        for(int i=2;i*i<=N;i++) {
            if(!prime[i]) {
                for(int j=i*i;j<=N;j+=i)prime[j] = true;
            }
        }
        ArrayList<Integer> list = new ArrayList<>();
        for(int i=2;i<=N;i++) {
            if(!prime[i])list.add(i);
        }

        int start = 0;
        int end = 0;
        int sum = list.get(0);
        int cnt = 0;

        while(true) {
            try {
                if(sum == N) {
                    cnt++;
                    sum = sum + list.get(++end) - list.get(start++);
                }
                else if(sum < N) {
                    sum+=list.get(++end);
                }else if(sum > N) {
                    sum-=list.get(start++);
                }
            } catch (Exception e) {
                break;
            }
        }

        System.out.println(cnt);
    }
}
