import java.util.*;

class Solution {
    public int[] solution(int n, String[] words) {
        int[] answer = new int[2];
        ArrayList<String> list = new ArrayList<>();

        boolean flag = true;
        char ch = words[0].charAt(words[0].length()-1);
        list.add(words[0]);
        int loc = 0;
        int cnt = 1;

        for(int i=2;i<=words.length;i++){
            String word = words[i-1];
            loc = i%n;

            if(ch != word.charAt(0) || list.contains(word)){
                if(loc == 0)answer[0] = n;
                else answer[0] = loc;
                answer[1] = cnt;

                flag = false;
                break;
            }
            list.add(word);
            ch = word.charAt(word.length()-1);
            if(i%n == 0)cnt++;
        }
        if(flag)answer = new int[] {0,0};
        return answer;
    }
}