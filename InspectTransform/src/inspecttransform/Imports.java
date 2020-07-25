/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package inspecttransform;

import java.io.*;
import java.io.InputStreamReader;
import java.util.logging.Logger;

public class Imports {
    public void method() throws IOException {
        InputStream is = null;
        try {
           is.read();
        } catch (FileNotFoundException ex) {
            Logger.getLogger(Imports.class.getName());
        } finally {
           try {
                is.close();
            } catch (IOException ex) {
                Logger.getLogger(Imports.class.getName());
            }
        }
        
    }
}
