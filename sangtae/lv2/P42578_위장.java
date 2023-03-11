import java.util.*;
public class P42578_위장 {
    public int solution(String[][] clothes) {
        int answer = 1;
        HashMap<String, Integer> map = new HashMap<>();

        for(int i=0;i<clothes.length;i++){
            map.put(clothes[i][1], map.getOrDefault(clothes[i][1], 0)+1);
        }

        ArrayList<Integer> list = new ArrayList<>(map.values());
        for(int l : list){
            answer *= l+1;
        }

        return answer-1;
    }
}
