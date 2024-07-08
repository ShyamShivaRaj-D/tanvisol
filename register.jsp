<%@page import ="java.sql.*" %>

<%@page import="Register.RegisterTanvisol" %>

<jsp:useBean id="register" class="Register.RegisterTanvisol" >
<jsp:setProperty name="register" property="*" />
<%
  Connection con=null;
  try
  {
   Class.forName("com.mysql.jdbc.Driver");
   con =DriverManager.getConnection ("jdbc:mysql://localhost/tanvisol?"+"user=root&password=root");;
   PreparedStatement ps =con.prepareStatement("insert into register(name,email,city,mnumber,comment) values (?,?,?,?,?)");
   ps.setString(1,register.getName());
   ps.setString(2,register.getEmail());
   ps.setString(3,register.getCity());
   ps.setString(4,register.getMnumber());
   ps.setString(5,register.getComment());
   int status=ps.executeUpdate();
   con.close();
    if (status > 0) {
    %>
      <script>
         alert("You Successfully Registered");
         window.location.href = "contact.html";
      </script>
    <%
    }
  }
  catch(Exception ex){
   ex.printStackTrace();
  }
%>
</jsp:useBean>