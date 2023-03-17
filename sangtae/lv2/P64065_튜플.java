import java.util.*;
public class P64065_튜플 {
    public int[] solution(String s) {
        int[] answer = {};
        s = s.substring(2, s.length()-2);
        s = s.replace("},{","/");

        String arr[] = s.split("/");
        Arrays.sort(arr, (o1,o2) -> o1.length()-o2.length());

        ArrayList<Integer> list = new ArrayList<>();
        for(String ss : arr){
            String temp[] = ss.split(",");
            for(String t : temp){
                int x = Integer.parseInt(t);
                if(!list.contains(x))list.add(x);
            }
        }
        answer = list.stream().mapToInt(i->i).toArray();
        return answer;
    }
}
