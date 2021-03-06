package com.dropshipping;

import java.security.SecureRandom;

// https://www.baeldung.com/spring-boot-keycloak
// https://www.baeldung.com/spring-security-method-security
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.session.RegisterSessionAuthenticationStrategy;
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
@EnableWebSecurity
class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private MyUserDetailsService userDetailsService;
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) {
	}


	// Specifies the session authentication strategy
	@Bean
	protected SessionAuthenticationStrategy sessionAuthenticationStrategy() {
		return new RegisterSessionAuthenticationStrategy(new SessionRegistryImpl());
	}
	
	@Bean
    public PasswordEncoder passwordEncoder() {
        return new PasswordEncoder() {
			
			@Override
			public boolean matches(CharSequence rawPassword, String encodedPassword) {
				return BCrypt.checkpw(rawPassword.toString(), encodedPassword);
			}
			
			@Override
			public String encode(CharSequence rawPassword) {
				return BCrypt.hashpw(rawPassword.toString(), BCrypt.gensalt(4));
			}
		};
    }
	
	@Bean
	public DaoAuthenticationProvider authenticationProvider() {
	    DaoAuthenticationProvider authProvider
	      = new DaoAuthenticationProvider();
	    authProvider.setUserDetailsService(userDetailsService);
	    authProvider.setPasswordEncoder(passwordEncoder());
	    return authProvider;
	}
	
//	@Override
//    protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
//        auth.inMemoryAuthentication()
//          .withUser("user1").password(passwordEncoder().encode("user1")).roles("USER")
//          .and()
//          .withUser("user2").password(passwordEncoder().encode("user2")).roles("USER")
//          .and()
//          .withUser("admin").password(passwordEncoder().encode("admin")).roles("ADMIN");
//    }
	
	@Override
	protected void configure(final HttpSecurity http) throws Exception {
		http.csrf().disable()
        .httpBasic()
      .and()
        .authorizeRequests().anyRequest().permitAll();
         /* .antMatchers(
        		  "/api/v1/usuario/",
        		  "/api/v1/usuario/token",
        		  "/swagger-ui.html#/"
        		  ).permitAll()
          .anyRequest().authenticated()
		.and().csrf()
	        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());*/
	}
}