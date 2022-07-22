package lk.easyCarRental.spring;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import javax.servlet.MultipartConfigElement;
import javax.servlet.ServletRegistration;

/**
 * @Created_By_: Kavinda Gimhan
 * @Date_: 6/30/2022
 * @Time_: 8:10 PM
 * @Project_Name : easycarRental
 **/

public class WebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class[]{lk.easyCarRental.spring.config.WebRootConfig.class};
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[]{lk.easyCarRental.spring.config.WebAppConfig.class};
    }

    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }

    /*
     * We need to override this method inorder to set MultipartConfigElement
     */
    @Override
    protected void customizeRegistration(ServletRegistration.Dynamic registration) {
        registration.setMultipartConfig(new MultipartConfigElement(System.getProperty("java.io.tmpdir")));
    }
}

