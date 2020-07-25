package inspecttransform;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.LinkedList;

public class PredefinedSet {

    LinkedList<String> l = new LinkedList<String>();
    
    public void method() throws FileNotFoundException, IOException {
        String a = "";
        if(a.equals("a")) {
            System.out.println(1);
        } else if(a.equals("b")) {
            System.out.println(2);
        } else {
            System.out.println(3);
        }
        
        BufferedReader br = new BufferedReader(new FileReader(""));
        try {
            br.readLine();
        } finally {
            br.close();
        }
    }                              
}
